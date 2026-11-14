"""Compare the package index with the MdWrk Pages workspace manifests."""

import json
from dataclasses import replace
from pathlib import Path

from index_toml import IndexFile, check_workspace
from index_toml_adapter_pnpm import PnpmWorkspaceAdapter
from index_toml_contracts.workspace import WorkspaceDependency


class MdWrkWorkspaceAdapter(PnpmWorkspaceAdapter):
    """Include unqualified dependency declarations naming a workspace member."""

    def discover(self, root):
        snapshot = super().discover(root)
        if snapshot.diagnostics:
            return snapshot
        members = {member.name: member for member in snapshot.members}
        dependencies = list(snapshot.dependencies)
        for member in snapshot.members:
            manifest = json.loads((root / member.manifest).read_text(encoding="utf-8"))
            for category in ("dependencies", "devDependencies", "optionalDependencies", "peerDependencies"):
                for name, specifier in manifest.get(category, {}).items():
                    if name in members and ":" not in specifier:
                        dependencies.append(WorkspaceDependency(
                            member.path, members[name].path, category, member.manifest,
                            f"{name}: {specifier}",
                        ))
        return replace(snapshot, dependencies=tuple(dependencies))


if __name__ == "__main__":
    root = Path(__file__).resolve().parents[2]
    report = check_workspace(IndexFile(root / "packages/index.toml"), root, MdWrkWorkspaceAdapter())
    for issue in (*report.diagnostics, *report.differences):
        print(issue)
    if not report.ok:
        raise SystemExit(1)
    print(f"Package index matches {len(report.matches)} workspace manifests")

import React from "react";
import { ProfilePage as ProfilePageBase, type ProfilePageProps as ProfilePageBaseProps } from "./chunk-01.js";

export interface ProfilePageProps extends ProfilePageBaseProps {
  className?: string;
}

export function ProfilePage(props: ProfilePageProps) {
  return <ProfilePageBase {...props} />;
}

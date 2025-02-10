import { Conversations } from "../components/profile/conversations";
import { PlatformSettings } from "../components/profile/platform-settings";
import { Profile } from "../components/profile/profile";
import { ProfileInformation } from "../components/profile/profile-information";
import { Projects } from "../components/profile/projects";

export const ProfilePage = () => {
  return (
    <div className="flex flex-col gap-3 mt-3">
      <Profile />
      <div className="flex flex-row gap-4">
        <PlatformSettings />
        <ProfileInformation />
        <Conversations />
      </div>
      <Projects />
    </div>
  );
};

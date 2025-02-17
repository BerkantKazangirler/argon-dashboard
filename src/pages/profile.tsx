import {
  Profile,
  PlatformSettings,
  ProfileInformation,
  Conversations,
  Projects,
} from "@/components";

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

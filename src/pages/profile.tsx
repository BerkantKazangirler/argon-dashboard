import {
  Profile,
  PlatformSettings,
  ProfileInformation,
  Conversations,
  Projects,
} from "@/components";

export const ProfilePage = () => {
  return (
    <div className="mt-3 flex flex-col gap-3">
      <Profile />
      <div className="mr-5 flex flex-col gap-4 xl:mr-0 xl:flex-row">
        <PlatformSettings />
        <ProfileInformation />
        <Conversations />
      </div>
      <Projects />
    </div>
  );
};

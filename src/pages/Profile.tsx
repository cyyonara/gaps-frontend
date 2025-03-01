import ProfileInformationCard from "@/components/profile/ProfileInformationCard";
import UpdatePasswordCard from "@/components/profile/UpdatePasswordCard";
import UpdateProfilePictureCard from "@/components/profile/UpdateProfilePictureCard";

const Profile = () => {
  return (
    <div className="flex flex-col">
      <div className="mb-12 flex items-center justify-between">
        <div className="flex flex-col gap-y-1">
          <div className="flex items-center gap-x-3">
            <h1 className="text-3xl font-bold text-primary">My Profile</h1>
          </div>
          <p className="text-muted-foreground">your account information</p>
        </div>
      </div>
      <ProfileInformationCard />
      <UpdatePasswordCard />
      <UpdateProfilePictureCard />
    </div>
  );
};

export default Profile;

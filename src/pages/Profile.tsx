import ProfileInformationCard from "@/components/profile/ProfileInformationCard";
import UpdatePasswordCard from "@/components/profile/UpdatePasswordCard";
import UpdateProfilePictureCard from "@/components/profile/UpdateProfilePictureCard";
import ProfileCard from "@/components/profile/ProfileCard";

const Profile = () => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between mb-12">
        <div className="flex flex-col gap-y-1">
          <div className="flex items-center gap-x-3">
            <h1 className="text-3xl font-bold text-primary">My Profile</h1>
          </div>
          <p className="text-muted-foreground">Your account information</p>
        </div>
      </div>

      <div className="flex gap-x-10">
        <ProfileCard />
        <ProfileInformationCard />
        {/* <UpdatePasswordCard /> */}
      </div>
      {/* <UpdateProfilePictureCard /> */}
    </div>
  );
};

export default Profile;

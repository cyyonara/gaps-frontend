import Headings from "@/components/dean/Headings";
import ProfileContainer from "@/components/dean/ProfileContainer";
const Profile = () => {
  return (
    <div className="flex flex-col space-y-16">
      <Headings
        title="Profile"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
      <div>
        <ProfileContainer />
      </div>
    </div>
  );
};

export default Profile;

import { Navbar } from "@/widgets/Navbar/ui/Navbar";
// import { useParams } from "react-router-dom";
import { UserGallery, UserProfileHeader } from "@/entities/user";
import { photos } from "../data/photos";

export function ProfilePage() {
  // const { name } = useParams();
  return (
    <div className="px-4 md:px-8 lg:px-40 w-full">
      <Navbar />
      <div className="grid grid-cols-4 px-[400px] items-center">
        <UserProfileHeader
          user={{
            name: "Ась",
            fullName: "Asya Petrov",
            avatar:
              "https://photo9.wambacdn.net/41/43/04/1779403414/2029152310_huge.jpg?hash=5GmA4nwenP8KlpSs7tOQpQ&expires=64060578000&updated=1699170483",
            posts: 0,
            followers: 0,
            following: 0
          }}
        />
        <div className="w-full m-auto col-span-4 py-2">
          <UserGallery photos={photos} />
        </div>
      </div>
    </div>
  );
}

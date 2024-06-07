import { UserCard } from "@/entities/user";
import { StartDialogButton } from "@/features/startDialog";

interface IFriend {
  name: string;
  description: string;
  src: string;
}

export function FriendsList() {
  const friends = [
    {
      name: "terylucas",
      description: "Hello my friend",
      src: "https://github.com/shadcn.png"
    }
  ] as IFriend[];

  return (
    <>
      <p className="text-xl font-bold">Friends</p>
      <div className="mt-4">
        {friends.map((friend) => (
          <UserCard {...friend} button={<StartDialogButton />} />
        ))}
      </div>
    </>
  );
}

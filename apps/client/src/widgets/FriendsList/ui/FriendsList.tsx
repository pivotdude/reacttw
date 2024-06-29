import { UserCardWithButton } from "@/entities/user";
import { StartDialogButton } from "@/features/startDialog";
import { useFriendsList } from "../store/useFriendsList";

export function FriendsList() {
  const friends = useFriendsList(state => state.friends)

  return (
    <>
      <p className="text-xl font-bold">Friends</p>
      <div className="mt-4 space-y-4">
        {friends.map((friend) => (
          <UserCardWithButton {...friend} button={<StartDialogButton />} />
        ))}
      </div>
    </>
  );
}

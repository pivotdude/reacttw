"use server"
export function Sidebar() {
  console.log('sidebar')
    return (
        <div className="fixed h-full bg-sky-200 space-x-2 w-16 flex justify-center">
            <div className="h-8 w-8 cursor-pointer flex jus">
                Yes
            </div>
        </div>
    )
}
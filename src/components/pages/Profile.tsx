const Profile = () => {
  return (
    <section className="h-[85%] px-4 mt-5 mx-4 bg-white">
        <div className="px-8 py-8 mt-8 ">
                    <img loading="lazy" src="https://placecats.com/bella/300/300" alt="_profile-image" className="w-20 h-20 mb-2"/>
                    <hr className="w-[300px]"/>
                    <div className="flex flex-col gap-4 mt-3">
                    <p className="text-gray-400">Name : <span className="text-sm text-black">Jerome Bell</span></p>
                    <p className="text-gray-400">Email : <span className="text-sm text-black">micher.mitc@example.com</span></p>
                    <p className="text-gray-400">Group : <span className="text-sm text-black">3</span></p>
                    <p className="text-gray-400">Role : <span className="text-sm text-black">Student</span></p>
                    </div>
        </div>

    </section>
  )
}

export default Profile
import Image from "next/image";

export default function AlumniCard({
  companyLogo,
  review,
  userImage,
  userName,
  userRole,
}) {
  return (
    <div className="w-full sm:w-[380px] lg:w-[420px] bg-white rounded-2xl shadow-xl p-6 flex flex-col gap-4">
      
      {/* Company Logo */}
      <div>
        <Image
          src={companyLogo}
          alt="company logo"
          width={140}
          height={40}
          className="object-contain"
        />
      </div>

      {/* Review Text */}
      <p className="text-[16px] leading-relaxed text-black/80 font-poppins">
        {review}
      </p>

      {/* User Info */}
      <div className="flex items-center gap-3 pt-3">
        <Image
          src={userImage}
          alt={userName}
          width={50}
          height={50}
          className="rounded-full object-cover"
        />
        <div>
          <p className="font-poppins font-semibold text-[16px]">{userName}</p>
          <p className="text-[#1a73e8] text-[14px] font-poppins">
            {userRole}
          </p>
        </div>
      </div>
    </div>
  );
}

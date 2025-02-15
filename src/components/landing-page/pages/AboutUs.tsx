import FeatureCard from "../FeatureCard";

const AboutUs = () => {
  const features = [
    {
      title: "Assessments for Mentors",
      description:
        "This feature allows mentors to undergo evaluations to determine their readiness for certification. With a simple Passed or Failed status, the assessments are designed to provide clear, concise feedback on whether a mentor meets the required standards. This straightforward approach helps mentors track their progress and ensures they are equipped for success in their roles.",
      icon: "FaNoteSticky",
    },

    {
      title: "Issuance of Certificates",
      description:
        "This feature ensures that certificates are issued to mentors once they have successfully passed their assessments, with a 7-week delay after the exam results are finalized. After this waiting period, mentors can access their digital certificates, which serve as official recognition of their achievements. The system streamlines the process, ensuring that certificates are delivered accurately and on time, following the necessary evaluation period.",
      icon: "TbCertificate",
    },
    {
      title: "Certificate Legitimacy Verification",
      description:
        "This feature provides a quick and secure way to verify the authenticity of a certificate through a unique QR code. Scanning the QR code directs users to the soft copy of the certificate, where they can view and download it. This ensures that the certificate is legitimate and easily accessible, offering a seamless experience for mentors and employers alike. The QR code provides an added layer of security while giving mentors the convenience of downloading their certificate anytime.",
      icon: "AiFillSafetyCertificate",
    },
  ];

  return (
    <div className="h-[70vh] px-[8%] flex flex-col justify-center items-center">
      <h3 className="font-bold pb-8">
        GAPS' Features Built for <span className="text-primary">Mentors</span>
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 justify-items-center">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutUs;

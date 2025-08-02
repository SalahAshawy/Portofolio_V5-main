import { FileText } from 'lucide-react';

const DownloadCVButton = () => {
  const handleDownload = () => {
    const fileUrl = '/SalahAshaswySoftwareEng.pdf'; // Put your file in /public/cv.pdf
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'SalahAshawyCV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      data-aos="fade-up"
      data-aos-duration="800"
      className="w-full lg:w-auto sm:px-6 py-2 sm:py-3 rounded-lg bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center lg:justify-start gap-2 shadow-lg hover:shadow-xl animate-bounce-slow"
    >
      <FileText className="w-4 h-4 sm:w-5 sm:h-5" /> Download CV
    </button>
  );
};

export default DownloadCVButton;

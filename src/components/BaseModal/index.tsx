import React from 'react';

type Props = {
  children: React.ReactNode;
}

const BaseModal = ({ children }: Props) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-fadeIn overflow-y-auto p-4">
      <div className="animate-zoomIn my-auto min-w-[500px] rounded-3xl font-{'Poppins', sans-serif} shadow-lg"> 
        {children}
      </div>
      
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes zoomIn {
          0% {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
          }
          50% {
            transform: scale(1.02);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.9s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        .animate-zoomIn {
          animation: zoomIn 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
      `}</style>
    </div>
  );
}

export default BaseModal;
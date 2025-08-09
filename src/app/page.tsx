
'use client';
import * as React from "react"
import Projects from "./projects";
import Achievements from "./achievements";
import Main from "./main";

const ScrollIndicator: React.FC<{ currentPage: number }> = ({ currentPage }) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: '50dvh',
        right: '20px',
        transform: 'translateY(-50%)',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        zIndex: 9999,
      }}
    >
      {[1, 2, 3].map((page) => (
        <div
          key={page}
          style={{
            width: '0.4rem',
            height: '0.4rem',
            borderRadius: '50%',
            backgroundColor: currentPage === page ? '#f1b83cff' : '#ccc',
            transition: 'background-color 0.3s',
          }}
        />
      ))}
    </div>
  );
};


export default function Home() {
 const [currentPage, setCurrentPage] = React.useState(1);
  const lastScrollTime = React.useRef<number>(0);
  const maxPages = 3;

  React.useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const now = Date.now();
      // Prevent rapid scroll changes (500ms throttle)
      if (now - lastScrollTime.current < 500) return;
      lastScrollTime.current = now;

      setCurrentPage(prev => {
        if (e.deltaY > 0) {
          // Scrolling down
          return Math.min(prev + 1, maxPages);
        } else {
          // Scrolling up
          return Math.max(prev - 1, 1);
        }
      });
    };

    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  const renderContent = () => {
    switch (currentPage) {
      case 1:
        return <Main />;
      case 2:
        return <Projects />
      case 3:
        return <Achievements />;
      default:
        return null;
    }
  };
  return (
    <main className="viewport">
      
    {renderContent()}
    <ScrollIndicator currentPage={currentPage} />     

    </main>
  );
}

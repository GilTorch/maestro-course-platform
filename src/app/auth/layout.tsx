
import SideNav from '@/app/ui/auth/sidenav';
import Copyright from '../ui/Copyright';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <div className="w-full hidden md:block md:w-1/2">
          <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12 mt-36">
        {children}
        <footer className="mt-8 flex justify-center items-center">
            <Copyright />
        </footer>
      </div>
    </div>
  );
} 
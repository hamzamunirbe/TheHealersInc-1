import Header from "../components/Header";
import SidebarList from "../components/SidebarList";
import ProfileContainer from "../components/ProfileContainer";

const Profile = () => {
  return (
    <div className="w-full relative shadow-[0px_2px_8px_rgba(0,_0,_0,_0.15)] bg-m3-sys-light-on-primary overflow-hidden flex flex-col items-start justify-start tracking-[normal] leading-[normal]">
      <Header />
      <main className="w-[1340px] flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border gap-[56px] max-w-full mq750:gap-[28px] mq1050:pl-5 mq1050:box-border">
        <div className="h-[1056px] w-[300px] bg-gray1-300 box-border flex flex-col items-start justify-start py-4 px-[15px] border-r-[1px] border-solid border-silver-200 mq450:gap-[134px] mq1050:hidden">
          <SidebarList />
        </div>
        <section className="flex-1 flex flex-col items-start justify-start pt-14 px-0 pb-0 box-border max-w-[calc(100%_-_356px)] mq750:pt-[23px] mq750:box-border mq1050:pt-9 mq1050:box-border mq1050:max-w-full">
          <ProfileContainer />
        </section>
      </main>
    </div>
  );
};

export default Profile;

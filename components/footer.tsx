import getStore from "@/actions/get-store";

const Footer = async () => {
  const store = await getStore();

  return (
    <footer className="bg-white border-t">
      <div className="mx-auto py-10">
        <p className="text-center text-xs text-black">
          &copy; 2023 {store.name}, All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

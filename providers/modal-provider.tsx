"use client";

import PreviewModal from "@/components/preview-modal";
import useMounted from "@/hooks/use-mounted";

const ModalProvider = () => {
  const { isMounted } = useMounted();

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <PreviewModal />
    </>
  );
};

export default ModalProvider;

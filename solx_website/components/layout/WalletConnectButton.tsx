"use client";

import { AvatarMenu, ClientOnly } from "@components";
import CustomButton from "@components/ui/CustomButton";
import { useThirdWebContext } from "@hooks";
import { useConnectionStatus } from "@thirdweb-dev/react";

const WalletConnectButton = () => {
  const { connect, disconnect } = useThirdWebContext();
  const status = useConnectionStatus();

  return (
    <ClientOnly>
      {status === "connected" ? (
        <div className="flex gap-4 xl:gap-6 items-center justify-between">
          <AvatarMenu />
          <CustomButton
            title="Disconnect Wallet"
            containerStyles="bg-green min-w-[130px] rounded-xl text-cream"
            handleClick={() => disconnect()}
          />
        </div>
      ) : (
        <CustomButton
          title="Connect Wallet"
          containerStyles="bg-orange min-w-[130px] rounded-xl text-cream"
          handleClick={async () => {
            await connect();
          }}
        />
      )}
    </ClientOnly>
  );
};

export default WalletConnectButton;

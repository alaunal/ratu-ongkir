import React from "react";
import { Outlet } from "react-router-dom";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

import { useAuth } from "@/contexts";

import { CaretDown, SignOut } from "@phosphor-icons/react";

const Layout: React.FC = () => {
  const { user, signout } = useAuth();

  return (
    <>
      <header className="w-full flex items-center justify-center bg-slate-100 h-16 shadow-md">
        <div className="container">
          <div className="flex w-full justify-between items-center">
            <div className="flex items-center gap-1">
              <img src="/logo.png" alt="Ratu Ongkir" className="h-10 w-auto" />
              <div className="font-semibold text-xl text-slate-800">
                Ratu<span className="font-normal text-base"> Ongkir</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src={user?.picture} alt={user?.name} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="relative">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="link">
                      Hi, {user?.name}{" "}
                      <CaretDown size={14} className="inline-block ml-1" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => signout(() => {})}>
                      Sign Out <SignOut weight="bold" />
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className="container mx-auto py-4">
          <h1 className="text-3xl font-bold text-slate-800 mb-1">
            Ratu Ongkir
          </h1>
          <p>Periksa ongkos kirim dan lacak paket dengan cepat di sini!</p>

          <section className="mt-10">
            <Outlet />
          </section>
        </div>
      </main>
    </>
  );
};

export default Layout;

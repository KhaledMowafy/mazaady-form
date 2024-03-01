import DropDownWrapper from "@/components/atoms/dropdown/DropDownWrapper";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <DropDownWrapper title="Main Category" category='mainCategory'/>
    </main>
  );
}

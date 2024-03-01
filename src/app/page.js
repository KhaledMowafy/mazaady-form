import DropDownAPI from "@/components/atoms/dropdown/DropDownAPI";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <DropDownAPI title="Main Category" category='mainCategory'/>
    </main>
  );
}

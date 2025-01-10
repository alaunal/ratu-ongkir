import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const SearchResult: React.FC = () => {
  return (
    <Card className="mt-4">
      <CardHeader>
        <CardTitle>Search Result for</CardTitle>
        <CardDescription>
          Pengiriman Dari: [city name] dengan tujuan kota: [city name], dengan
          berat barang: [000g]
        </CardDescription>
      </CardHeader>
      <CardContent>testing here!</CardContent>
    </Card>
  );
};

export default SearchResult;

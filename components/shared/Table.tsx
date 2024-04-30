import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const invoices = [
  {
    id: "01",
    UserName:"Gamada Tamiru",
    paymentStatus: "Paid",
    totalAmount: "50.00 Birr",
    paymentMethod: "Credit Card",
  },
  {
    id: "02",
    UserName:"Feysel Teshome",
    paymentStatus: "Pending",
    totalAmount: "50.00 Birr",
    paymentMethod: "Credit Card",
  },
  {
    id: "03",
    UserName:"Betselot Abraham",
    paymentStatus: "Unpaid",
    totalAmount: "50.00 Birr",
    paymentMethod: "-",
  },
  {
    id: "04",
    UserName:"Iman",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    id: "05",
    UserName:"Dagmawit",
    paymentStatus: "Paid",
    totalAmount: "50.00 Birr",
    paymentMethod: "Credit Card",
  },
  {
    id: "06",
    UserName:"Feysel",
    paymentStatus: "Pending",
    totalAmount: "50.00 Birr",
    paymentMethod: "-",
  },
  {
    id: "07",
    UserName:"Mengesha worku",
    paymentStatus: "Unpaid",
    totalAmount: "50.00 Birr",
    paymentMethod: "-",
  },
];

export function TableDemo() {
  return (
    <Table className="shadow-md rounded-lg overflow-auto">
      <TableCaption>A list of your monthly payements.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead></TableHead>
          <TableHead>Username</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead>Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.id}>
            <TableCell className="font-medium">{invoice.id}</TableCell>
            <TableCell>{invoice.UserName}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell>{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      {/* <TableFooter>
        <TableRow>
          <TableCell colSpan={4}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter> */}
    </Table>
  );
}

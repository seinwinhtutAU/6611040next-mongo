import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "next/link";

export default function BoxBasic() {
  return (
    <main>
      <Box
        component="section"
        className="border border-gray-800 m-5 text-center p-5"
      >
        <h1 className="text-3xl text-violet-950 mb-4">Stock Management v1.0</h1>
        <div className="flex justify-center gap-4">
          <Link href="/product" passHref>
            <Button variant="contained">Products</Button>
          </Link>
          <Link href="/category" passHref>
            <Button variant="contained">Category</Button>
          </Link>
        </div>
      </Box>
    </main>
  );
}

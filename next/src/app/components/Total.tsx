'use client';

import { Button } from "@/components/ui/button";
import { Total } from "../models/meals";


export default function TotalComponent({total, clearTotal} : {total: Total, clearTotal: () => void}) {


  
  return (
     <div className="fixed bottom-0 left-0 bg-primary w-full h-1/5">
        <div className="mt-2 mx-10 mb-5 flex justify-between">
            <span className="text-2xl font-semibold">Total</span>
            <Button onClick={() => clearTotal()} variant="secondary">Clear</Button>

            </div>
        <div className="text-4xl mx-5 font-bold flex justify-between">
            <span className="mx-5">Insulin: {total.insulin.toFixed(2)}</span>
            <span className="mx-5">Carbs: {total.carbs.toFixed(2)}</span>
            
        </div>
         

     </div>
  );
}

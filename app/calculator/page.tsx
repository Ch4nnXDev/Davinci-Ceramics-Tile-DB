"use client";
import useTileCalculator from "../lib/tileCalculator";
import {
  Calculator as CalculatorIcon,
  Ruler,
} from "lucide-react";




export default function Calculator() {
  const calculator = useTileCalculator();

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 via-white to-slate-100 px-6 py-16">

      <div className="w-full max-w-4xl overflow-hidden rounded-[32px] border border-white/80 bg-white/60 shadow-[0_20px_80px_rgba(15,23,42,0.12)] backdrop-blur-2xl">



        <div className="border-b border-slate-200/60 px-8 py-7">

          <div className="flex items-center gap-4">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white bg-white/80 shadow-sm">

              <CalculatorIcon
                className="h-5 w-5 text-slate-700"
              />

            </div>

            <div>

              <h1 className="text-xl font-semibold tracking-tight text-slate-900">
                Tile Calculator
              </h1>

              <p className="mt-1 text-sm text-slate-500">
                Calculate how many tiles you need for your space.
              </p>

            </div>

          </div>

        </div>



        <div className="grid gap-8 p-8 md:grid-cols-2">



          <div>

            <div className="mb-6 flex items-center gap-2">

              <Ruler className="h-4 w-4 text-slate-400" />

              <h2 className="text-sm font-semibold text-slate-700">
                Measurements
              </h2>

            </div>

            <div className="space-y-5">

             

              <Input
                label="Tile Length"
                placeholder="600"
                unit="mm"
                value={calculator.tileLength}
                onChange={calculator.setTileLength}
              />

             

              <Input
                label="Tile Width"
                placeholder="600"
                unit="mm"
                value={calculator.tileWidth}
                onChange={calculator.setTileWidth}
              />

          
              <div className="my-7 h-px bg-slate-200/70" />

            

              <Input
                label="Room Length"
                placeholder="12"
                unit="ft"
                value={calculator.roomLength}
                onChange={calculator.setRoomLength}
              />

            

              <Input
                label="Room Width"
                placeholder="10"
                unit="ft"
                value={calculator.roomWidth}
                onChange={calculator.setRoomWidth}
              />

        

              <div>

                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Wastage
                </label>

                <div className="grid grid-cols-4 gap-2">

                  {[5, 10, 15, 20].map((value) => (

                    <button
                      key={value}
                      type="button"
                      onClick={() =>
                        calculator.setWastage(value)
                      }
                      className={`
                        rounded-xl
                        border
                        px-3
                        py-3
                        text-sm
                        font-medium
                        transition-all
                        duration-200

                        ${
                          calculator.wastage === value
                            ? "border-slate-900 bg-slate-900 text-white shadow-md"
                            : "border-slate-200 bg-white/60 text-slate-500 hover:bg-white hover:text-slate-900"
                        }
                      `}
                    >
                      {value}%
                    </button>

                  ))}

                </div>

              </div>

            </div>

          </div>

        

          <div className="relative overflow-hidden rounded-[28px] border border-white/80 bg-white/55 p-7 shadow-inner backdrop-blur-xl">

          

            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-white/90 blur-3xl" />

            <div className="relative">

              

              <div className="mb-8 flex items-center gap-2">

                <span className="text-sm font-semibold text-slate-700">
                  Calculation Result
                </span>

              </div>

             

              <p className="text-sm text-slate-400">
                Required tiles
              </p>

              <div className="mt-2 flex items-end gap-3">

                <span className="text-6xl font-semibold tracking-tight text-slate-900">
                  {calculator.requiredTiles}
                </span>

                <span className="mb-2 text-sm text-slate-400">
                  tiles
                </span>

              </div>

             

              <div className="my-8 h-px bg-slate-200/70" />

              

              <div className="space-y-4">

                <ResultRow
                  label="Room Area"
                  value={`${calculator.roomArea.toFixed(2)} ft²`}
                />

                <ResultRow
                  label="Tile Area"
                  value={`${calculator.tileArea.toFixed(2)} ft²`}
                />

                <ResultRow
                  label="Wastage"
                  value={`${calculator.wastage}%`}
                />

                <ResultRow
                  label="Total Area"
                  value={`${calculator.totalArea.toFixed(2)} ft²`}
                />

              </div>

              {/* Final Result */}

              <div className="mt-8 rounded-2xl border border-slate-200/70 bg-white/70 px-5 py-4 shadow-sm">

                <div className="flex items-center justify-between">

                  <span className="text-sm text-slate-500">
                    Tiles required
                  </span>

                  <span className="text-lg font-semibold text-slate-900">
                    {calculator.requiredTiles}
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}



function Input({
  label,
  placeholder,
  unit,
  value,
  onChange,
}: {
  label: string;
  placeholder: string;
  unit: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div>

      <label className="mb-2 block text-sm font-medium text-slate-700">
        {label}
      </label>

      <div className="relative">

        <input
          type="number"
          min="0"
          value={value}
          onChange={(e) =>
            onChange(e.target.value)
          }
          placeholder={placeholder}
          className="
            w-full
            rounded-2xl
            border
            border-slate-200/80
            bg-white/60
            px-4
            py-3.5
            pr-14
            text-slate-900
            outline-none
            transition

            placeholder:text-slate-300

            focus:border-slate-400
            focus:bg-white/90
            focus:ring-4
            focus:ring-slate-900/5
          "
        />

        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-medium text-slate-400">
          {unit}
        </span>

      </div>

    </div>
  );
}


function ResultRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between">

      <span className="text-sm text-slate-400">
        {label}
      </span>

      <span className="text-sm font-medium text-slate-700">
        {value}
      </span>

    </div>
  );
}
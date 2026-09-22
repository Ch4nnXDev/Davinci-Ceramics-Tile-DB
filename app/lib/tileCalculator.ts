'use client'

import { useState } from 'react';

const MM_PER_FOOT = 304.8;

export default function useTileCalculator() {
  const [tileLength, setTileLength] = useState("");
  const [tileWidth, setTileWidth] = useState("");

  const [calculatorMode, setCalculatorMode] =
    useState<"dimensions" | "area">("dimensions");

  const [roomLength, setRoomLength] = useState("");
  const [roomWidth, setRoomWidth] = useState("");

  const [manualArea, setManualArea] = useState("");

  const [wastage, setWastage] = useState(10);


  const tileLengthFt =
    Number(tileLength) > 0
      ? Number(tileLength) / MM_PER_FOOT
      : 0;

  const tileWidthFt =
    Number(tileWidth) > 0
      ? Number(tileWidth) / MM_PER_FOOT
      : 0;


  const tileArea = tileLengthFt * tileWidthFt;


  const roomArea =
    calculatorMode === "area"
      ? Number(manualArea) > 0
        ? Number(manualArea)
        : 0
      : Number(roomLength) > 0 && Number(roomWidth) > 0
        ? Number(roomLength) * Number(roomWidth)
        : 0;


  const totalArea =
    roomArea * (1 + wastage / 100);


  const requiredTiles =
    tileArea > 0
      ? Math.ceil(totalArea / tileArea)
      : 0;


  return {
    tileLength,
    setTileLength,

    tileWidth,
    setTileWidth,

    calculatorMode,
    setCalculatorMode,

    roomLength,
    setRoomLength,

    roomWidth,
    setRoomWidth,

    manualArea,
    setManualArea,

    wastage,
    setWastage,

    tileArea,
    roomArea,
    totalArea,
    requiredTiles,
  };
}
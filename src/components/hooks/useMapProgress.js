import { useState, useEffect } from "react";

const STORAGE_KEY = "portfolio_visited_locations";
const TOTAL_LOCATIONS = 7; // Total de ubicaciones en el mapa
const XP_PER_LOCATION = 100 / TOTAL_LOCATIONS; // ~14.28 XP por ubicación

export function useMapProgress() {
  const [visitedLocations, setVisitedLocations] = useState(() => {
    // Cargar del localStorage al iniciar
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  const [currentXP, setCurrentXP] = useState(0);
  const [isMaxLevel, setIsMaxLevel] = useState(false);

  // Calcular XP basado en ubicaciones visitadas
  useEffect(() => {
    const xp = Math.round(visitedLocations.length * XP_PER_LOCATION);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurrentXP(xp);
    setIsMaxLevel(visitedLocations.length >= TOTAL_LOCATIONS);
  }, [visitedLocations]);

  // Guardar en localStorage cada vez que cambian las ubicaciones visitadas
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(visitedLocations));
  }, [visitedLocations]);

  // Marcar una ubicación como visitada
  const markLocationAsVisited = (locationId) => {
    if (!visitedLocations.includes(locationId)) {
      setVisitedLocations((prev) => [...prev, locationId]);
    }
  };

  // Resetear el progreso
  const resetProgress = () => {
    setVisitedLocations([]);
    localStorage.removeItem(STORAGE_KEY);
  };

  return {
    visitedLocations,
    currentXP,
    maxXP: 100,
    isMaxLevel,
    markLocationAsVisited,
    resetProgress,
  };
}

export interface Planet {
  id: number | null;
  name: string;
  mass: number | null;
  type: 'TERRESTRIAL' | 'GAS_GIANT' | 'ICE_GIANT' | 'DWARF_PLANET';
}

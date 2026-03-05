/**
 * Módulo de funciones utilitarias.
 * Este archivo contiene funciones auxiliares que serán utilizadas y llamadas
 * desde el archivo principal para realizar varias operaciones.
 */

export function createStayCard(stay) {
    return `
    <div class="space-y-3">
    <img src="${stay.photo}" class="rounded-xl w-full h-60 object-cover" />
    <div class="flex justify-between items-center">
      <div class="flex items-center gap-2 text-sm">
        ${stay.superHost ?
        `<span class="border text-xs font-semibold px-2 py-1 rounded-full">SUPERHOST</span>` : ''
        }
        <span class="text-gray-500">${stay.type}</span>
      </div>
      <div class="flex items-center gap-1">
        <img src="./images/icons/star.svg" class="w-4" />
        <span>${stay.rating}</span>
      </div>
    </div>
    <h3 class="font-semibold">${stay.title}</h3>
  </div>
    `
}
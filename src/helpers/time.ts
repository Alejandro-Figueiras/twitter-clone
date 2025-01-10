export const getHoraRelativa = (createdAt: Date) => {
  const now = new Date()
  const diferenciaDias = Math.floor(
    (now.getTime() - createdAt.getTime()) / (1000 * 60 * 60 * 24)
  )
  const diferenciaHoras = Math.floor(
    (now.getTime() - createdAt.getTime()) / (1000 * 60 * 60)
  )

  if (diferenciaHoras < 24) {
    const diferenciaMinutos = Math.floor(
      (now.getTime() - createdAt.getTime()) / (1000 * 60)
    )
    if (diferenciaMinutos < 1) {
      return `${Math.floor((now.getTime() - createdAt.getTime()) / 1000)}s`
    } else if (diferenciaMinutos < 60) {
      return `${diferenciaMinutos}min`
    }
    return `${diferenciaHoras}h`
  }
  if (diferenciaDias == 1) return 'ayer'
  if (diferenciaDias < 7) {
    return `${diferenciaDias} días`
  }
  const meses = [
    'Ene',
    'Feb',
    'Mar',
    'Abr',
    'May',
    'Jun',
    'Jul',
    'Ago',
    'Sep',
    'Oct',
    'Nov',
    'Dic'
  ]
  if (diferenciaDias < 365) {
    return `${meses[createdAt.getMonth()]} ${createdAt.getDate()}`
  } else {
    return `${meses[createdAt.getMonth()]} ${createdAt.getDate()}, ${createdAt.getFullYear()}`
  }
}

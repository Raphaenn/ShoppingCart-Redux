// Arquivo para formatação de diversas áreas da aplicação

// Formatar número para moeda
export const { format: formatPrice } = new Intl.NumberFormat('pt-BT', {
    style: 'currency',
    currency: 'BRL',
})
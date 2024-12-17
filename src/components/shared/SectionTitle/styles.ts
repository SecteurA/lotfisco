export const getStyles = (light: boolean, centered: boolean) => ({
  container: `${centered ? 'text-center' : ''} mb-12`,
  title: `text-3xl lg:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-gray-900'}`,
  underline: `w-24 h-1 ${centered ? 'mx-auto' : ''} ${
    light ? 'bg-white/80' : 'bg-[#912c30]'
  } mb-6`,
  glow: `absolute -top-4 -left-8 w-40 h-8 ${
    light ? 'bg-white/5' : 'bg-[#912c30]/5'
  } blur-xl rounded-full`,
  subtitle: `text-lg ${
    light ? 'text-gray-100' : 'text-gray-600'
  } max-w-2xl ${centered ? 'mx-auto' : ''}`
});
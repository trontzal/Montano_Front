// Importa las funciones necesarias y tu componente
import { shallowMount } from '@vue/test-utils';
import FooterMontano from '@/components/FooterMontano.vue'; // Asegúrate de reemplazar la ruta real a tu componente

// Describe tus pruebas
describe('FooterMontano', () => {
  test('renderiza el título "Como llegar:" correctamente', () => {
    const wrapper = shallowMount(FooterMontano);

    // Verifica que el título h3 contenga el texto correcto
    expect(wrapper.find('h3').text()).toBe('Como llegar:');
  });
});

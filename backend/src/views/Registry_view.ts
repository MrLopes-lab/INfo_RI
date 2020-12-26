import Registry from '../models/Registry';

export default {
  render(registry: Registry) {
    return {
      id: registry.id,
      registration_number:registry.registration_number,
      operator_id: registry.operator_id,
      created_at: registry.created_at,
      checked: registry.checked,
    };
  },
}
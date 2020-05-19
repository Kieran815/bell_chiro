export default function updateAction(state, payload) {
  return {
    ...state,
    patientInfo: {
      ...state.patientInfo,
      ...payload
    }
  };
}

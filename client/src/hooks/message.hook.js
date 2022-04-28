import { useCallback } from 'react'
import swal from 'sweetalert'

export const useMessage = () => {
  return useCallback((text, icon) => {
    if (text) {
      swal({
        text: text,
        icon: icon,
      })
    }
  }, [])
}

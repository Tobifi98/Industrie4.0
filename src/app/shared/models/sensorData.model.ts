export interface SensorData {
  data: {
    systems: {
      cps1: {
        avail_state: {
          color_code: string,
          event_id: string,
          instance_id: string,
          label: string,
          model_id: string,
          signal_color: string,
        },
        current_op: {
          operation: {
            good_prod_qty: number,
            open_qty: number,
            pos_id: number,
            predicted_dur: number,
            predicted_end_dt: string,
            prod_order_id: string,
            scrap_qty: number,
            start_date: string,
            system_id: string,
            target_dur: number,
            target_end_dt: string,
            target_prod_dur: number,
            target_prod_dur_total: number,
            target_qty_min: number,
            target_setup_dur: number,
            target_start_dt: string,
          }
          success: true,
        },
        errors: [string],
        good_prod: {
          config: {
            fradi: number,
            label: string,
            target: number,
            type: string,
            unit: string,
          }
          current: number,
          instance_id: string,
          model_id: string,
          progress_pct: number,
        },
        oee: {
          avail: number,
          config: {
            fradi: number,
            label: string,
            minmax_range: [number],
            target_range: [number],
            unit: string,
          }
          current: number,
          daterange: [string],
          instance_id: string,
          model_id: string,
          oee: number,
          performance: number,
          yield: number,
        },
        performance: {
          config: {
            fradi: number,
            label: string,
            minmax_range: [number],
            target_range: [number],
            unit: string,
          }
          current: number,
          instance_id: string,
          max: number,
          min: number,
          model_id: string,
          theoretical: number,
          trend: number,
        },
        scrap: {
          config: {
            color: string,
            fradi: number,
            label: string,
            target: number,
            type: string,
            unit: string,
          }
          current: number,
          instance_id: string,
          model_id: string,
          progress_pct: number,
        }
        yield: {
          config: {
            fradi: number,
            label: string,
            minmax_range: [number],
            target_range: [number],
            unit: string,
          }
          current: number,
          instance_id: string,
          model_id: string,
        }
      }
    }
  }
}

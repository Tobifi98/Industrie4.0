export interface Alarm {
    system_id: string,
    alarms: [
        {
            module_id: string,
            errors:[
                {
                    code: string,
                    msg: string
                },
                {

                }
            ]
        }
    ]
  }

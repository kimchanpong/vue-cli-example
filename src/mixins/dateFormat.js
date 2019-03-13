export const dateFormat = {
    data() {
        return {
            mixinData: 'im mixin'
        }
    },
    created() {
      console.log("dateFormat console test")
    },
    methods: {
        getDateAndTime(date) {
            if(date != null) {
                let hour = date.getHours();
                let minutes = date.getMinutes();
                let fullDate = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
                return `${fullDate} ${hour} ${minutes}`
            } else {
                return null;
            }
        }
    }
}
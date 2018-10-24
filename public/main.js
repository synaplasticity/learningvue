'use strict'

Vue.component('task-list', {
    template:   `<div>
                <h2 class="subtitle is-4">All tasks</h2>
                    <task v-for="task in tasks" v-text="task.description" :key="task.id"></task>
                <hr>
                <h2 class="subtitle is-4">Pending tasks</h2>
                    <task v-for="task in pendingTasks" v-text="task.description"></task>
              </div>`,
    data() {
        return {
            tasks: [
                { id: 1, description: "Get milk", completed: false },
                { id: 2, description: "Get sode", completed: false },
                { id: 3, description: "Upgrade Mac", completed: true },
                { id: 4, description: "Icecream!", completed: false }
                ]
            }    
        },
        computed: {
            pendingTasks() {
                return this.tasks.filter(task => ! task.completed)
            }
        }
});

Vue.component('task', {
    template: '<li><slot></slot></li>'
});

Vue.component('task-message', {
    props: ['title', 'body'],
    data() {
        return {
            isVisible: true
        }
    },
    template: `
        <article class="message" v-show="isVisible">
            <div class="message-header">
                {{ title }}
                <button class="delete" aria-label="delete" @click="isVisible = false"></button>
                </div>
            <div class="message-body">
                {{ body }}
            </div>
        </article>
    `
})

Vue.component('modal', {
    props: ['msg'],
    template: `
            <div class="modal is-active">
                <div class="modal-background"></div>
                <div class="modal-content">
                    <div class="box">
                        {{ msg }}
                    </div>
                </div>
                <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
            </div>
    `
});

Vue.component('tabs', {
    template: `
        <div class="box">
            <div class="tabs">
            <ul>
                <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive }"> 
                    <a :href="tab.href" @click="selectTab(tab)"> {{ tab.name }} </a>
                </li>
            </ul>
            </div>
            <div class="tab-details">
                <slot></slot>
            </div>
        </div>
    `,

    data() {
        return { tabs: [] }
    },
    created() {
        // $vm0.$children.forEach(tab => console.log(tab.name))
        console.log(this.$children)
        this.tabs = this.$children
    },

    methods: {
        selectTab(selectedTab) {
            this.tabs.forEach(tab => {
                tab.isActive = (tab.name == selectedTab.name)                
            });
        }
    }
});

Vue.component('tab', { 
    props: { 
        name:  {required: true},
        selected: { default: false} // Assume false if not provided
    },
    template: `
        <div v-show="isActive"><slot></slot></div>
    `,
    data() {
        return {
            isActive: false
        }
    },
    mounted() {
        this.isActive = this.selected
    },
    computed: {
        href() {
            return '#' + this.name.toLowerCase().replace(/ /g, '-')
        }
    }
});

Vue.component('coupon', {
    template: `<div>
                <input name="code" placeholer="Enter coupon code" @blur="onCouponApplied">
                </div>`,

    methods: {
        onCouponApplied() {
            // The child component (coupon) broadcasts event
            this.$emit('applied', this.code)
            // alert('Applied!')
        }
    }
    
})

// Parent-child component communication
Vue.component('coupon', {
    template: `<div>
                Coupon : <input name="code" placeholer="Enter coupon code" @blur="onCouponApplied">
                </div>`,

    methods: {
        onCouponApplied() {
            // The child component (coupon) broadcasts event
            this.$emit('applied', {code: this.code})
            // alert('Applied!')
        }
    }
    
})

// Inter component communcation
window.Event = new Vue() // Shared event instance

Vue.component('discount', {
    template: `<div>
                Discount : <input name="amt" placeholer="Enter discount amount" @blur="onDiscountApplied">
                </div>`,

    methods: {
        onDiscountApplied() {
            // The component (discount) broadcasts event
            Event.$emit('disApplied', {amt: this.amt})
        }
    }
    
})


new Vue({
    el: '#root',
    data: {
        showModal: false,
        couponApplied: false,
        discountApplied: false
    },
    created() {
        // React to the the disApplied event raised by any event
        Event.$on('disApplied', () => alert('Discount has been applied'))
    },
    methods: {
        // The parent responds to the event raised by the chhild component (coupon)
        onCouponApplied(){
            this.couponApplied = true
            //alert('Coupon was applied.')
        }
    }
});

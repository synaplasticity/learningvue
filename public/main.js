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
})
new Vue({
    el: '#root',
    data: {
        showModal: false
    }
});

<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
        <div class="container-fluid">
            <router-link class="navbar-brand fw-bold" to="/">
                <i class="fas fa-parking me-2"></i>
                Sistema de Parqueos
            </router-link>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav me-auto">
                    <li v-for="item in navigationItems" :key="item.name" class="nav-item">
                        <router-link :to="item.path" class="nav-link px-3 py-2 rounded-3 mx-1 transition-all"
                            :class="{ 'active bg-white bg-opacity-20': isActive(item.path) }">
                            <i :class="item.icon" class="me-2"></i>
                            {{ item.name }}
                        </router-link>
                    </li>
                </ul>

                <div class="navbar-nav">
                    <div class="nav-item">
                        <span class="navbar-text me-3">
              <!--               <span class="badge bg-success me-2">{{ parkingStore.freeSpaces }} Libres</span>
                            <span class="badge bg-danger me-2">{{ parkingStore.occupiedSpaces }} Ocupados</span> -->
                          <!--   <span v-if="alertCount > 0" class="badge bg-warning">
                                <i class="fas fa-bell me-1"></i>
                                {{ alertCount }}
                            </span> -->
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>
<script setup>
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const navigationItems = [
    {
        name: 'Dashboard',
        path: '/',
        icon: 'fas fa-tachometer-alt'
    },
    {
        name: 'Espacios',
        path: '/spaces',
        icon: 'fas fa-car'
    },
    {
        name: 'Clientes',
        path: '/clients',
        icon: 'fas fa-users'
    },
    {
        name: 'Parqueo Rápido',
        path: '/quick-parking',
        icon: 'fas fa-bolt'
    },
    {
        name: 'Multas',
        path: '/fines',
        icon: 'fas fa-exclamation-triangle'
    },
    {
        name: 'Reportes',
        path: '/reports',
        icon: 'fas fa-chart-bar'
    }
]
const isActive = (path) => {
    return route.path === path
}
</script>
<style></style>
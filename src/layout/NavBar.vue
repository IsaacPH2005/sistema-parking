<template>
    <!-- Navbar con Bootstrap 5 puro -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm sticky-top">
        <div class="container-fluid">
            <!-- Logo y marca -->
            <router-link class="navbar-brand d-flex align-items-center" to="/">
                <span
                    class="bg-white bg-opacity-25 rounded-circle p-2 me-2 d-flex align-items-center justify-content-center">
                    <i class="fas fa-parking"></i>
                </span>
                <span class="d-none d-sm-inline fw-bold">Sistema de Parqueos</span>
                <span class="d-sm-none fw-bold">Parqueos</span>
            </router-link>

            <!-- Botón hamburguesa mejorado -->
            <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <!-- Contenido del navbar colapsable -->
            <div class="collapse navbar-collapse" id="navbarNav">
                <!-- Menú principal -->
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li v-for="item in navigationItems" :key="item.name" class="nav-item px-1">
                        <router-link :to="item.path" class="nav-link rounded-3 px-3 py-2 my-1"
                            :class="{ 'bg-white bg-opacity-25 fw-bold': isActive(item.path) }">
                            <i :class="item.icon" class="me-2"></i>
                            {{ item.name }}
                        </router-link>
                    </li>
                </ul>

                <!-- Badges de estado -->
                <div class="d-flex flex-column flex-lg-row align-items-start align-items-lg-center">
                    <div class="d-flex mb-2 mb-lg-0 me-lg-2">
                        <span class="badge bg-success d-flex align-items-center me-2 px-3 py-2">
                            <i class="fas fa-check-circle me-1"></i>
                            <span>{{ freeSpaces }} Libres</span>
                        </span>
                        <span class="badge bg-danger d-flex align-items-center me-2 px-3 py-2">
                            <i class="fas fa-times-circle me-1"></i>
                            <span>{{ occupiedSpaces }} Ocupados</span>
                        </span>
                    </div>

                    <!-- Notificaciones -->
                    <div v-if="alertCount > 0" class="mb-2 mb-lg-0">
                        <span class="badge bg-warning text-dark position-relative px-3 py-2">
                            <i class="fas fa-bell me-1"></i>
                            {{ alertCount }}
                            <span
                                class="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
                                <span class="visually-hidden">Alertas nuevas</span>
                            </span>
                        </span>
                    </div>

                    <!-- Menú de usuario (opcional) -->
                    <div class="dropdown ms-lg-2 mt-2 mt-lg-0">
                        <button class="btn btn-outline-light btn-sm dropdown-toggle" type="button" id="userDropdown"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fas fa-user-circle me-1"></i>
                            <span class="d-none d-sm-inline">Usuario</span>
                        </button>
                        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                            <li><a class="dropdown-item" href="#"><i class="fas fa-user me-2"></i>Perfil</a></li>
                            <li><a class="dropdown-item" href="#"><i class="fas fa-cog me-2"></i>Configuración</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#"><i class="fas fa-sign-out-alt me-2"></i>Cerrar
                                    Sesión</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </nav>

    <!-- Contenido principal -->
    <main class="container-fluid py-3">
        <!-- Breadcrumb -->
        <nav aria-label="breadcrumb" class="mb-3 d-none d-md-block">
            <ol class="breadcrumb bg-light p-2 rounded">
                <li class="breadcrumb-item">
                    <router-link to="/" class="text-decoration-none">
                        <i class="fas fa-home me-1"></i>Inicio
                    </router-link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                    {{ getCurrentPageName() }}
                </li>
            </ol>
        </nav>

        <!-- Contenido de la página -->
        <div class="bg-white rounded shadow-sm p-3 mb-4">
            <router-view v-slot="{ Component }">
                <transition name="fade" mode="out-in">
                    <component :is="Component" />
                </transition>
            </router-view>
        </div>
    </main>

    <!-- Footer -->
    <footer class="bg-light border-top py-3 mt-auto">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-6 text-center text-md-start">
                    <small class="text-muted">© 2024 Sistema de Parqueos</small>
                </div>
                <div class="col-md-6 text-center text-md-end">
                    <small class="text-muted">v1.0.0</small>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter();

// Datos reactivos
const freeSpaces = ref(45);
const occupiedSpaces = ref(23);
const alertCount = ref(3);

const navigationItems = [
    {
        name: 'Dashboard',
        path: '/',
        icon: 'fas fa-tachometer-alt'
    },
    {
        name: 'Espacios',
        path: '/espacios',
        icon: 'fas fa-car'
    },
    {
        name: 'Clientes',
        path: '/clientes',
        icon: 'fas fa-users'
    },
    {
        name: 'Parqueo Rápido',
        path: '/parqueo-rapido',
        icon: 'fas fa-bolt'
    },
    {
        name: 'Multas',
        path: '/multas',
        icon: 'fas fa-exclamation-triangle'
    },
    {
        name: 'Reportes',
        path: '/reportes',
        icon: 'fas fa-chart-bar'
    }
];

// Métodos
const isActive = (path) => {
    return route.path === path;
};

const getCurrentPageName = () => {
    const currentItem = navigationItems.find(item => item.path === route.path);
    return currentItem ? currentItem.name : 'Página';
};

onMounted(() => {
    // Any logic that needs to run after the component is mounted
});

</script>

<style>
/* Transiciones para router-view */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
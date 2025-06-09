import NavBar from "@/layout/NavBar.vue";
import Clients from "@/views/Clients.vue";
import Dashboard from "@/views/Dashboard.vue";
import Fines from "@/views/Fines.vue";
import ParkingSpaces from "@/views/ParkingSpaces.vue";
import QuickParking from "@/views/QuickParking.vue";
import Reports from "@/views/Reports.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: NavBar,
      children: [
        {
          path: "/",
          name: "home",
          component: Dashboard,
        },
        {
          path: "/clientes",
          name: "clientes",
          component: Clients,
        },
        {
          path: "/espacios",
          name: "espacios",
          component: ParkingSpaces,
        },
        {
          path: "/multas",
          name: "multas",
          component: Fines,
        },
        {
          path: "/reportes",
          name: "reportes",
          component: Reports,
        },
        {
          path: "/parqueo-rapido",
          name: "parqueo-rapido",
          component: QuickParking,
        },
      ],
    },
  ],
});

export default router;

<script setup lang="ts">
import type { DropdownMenuItemProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { DropdownMenuItem, useForwardProps } from "reka-ui"
import { cn } from "@/shared/lib/utils"

const props = defineProps<
  DropdownMenuItemProps & {
    class?: HTMLAttributes["class"]
    inset?: boolean
  }
>()

const forwarded = useForwardProps(props)
</script>

<template>
  <DropdownMenuItem
    v-bind="forwarded"
    :class="
      cn(
        'relative flex cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0',
        props.inset && 'pl-8',
        props.class,
      )
    "
  >
    <slot />
  </DropdownMenuItem>
</template>

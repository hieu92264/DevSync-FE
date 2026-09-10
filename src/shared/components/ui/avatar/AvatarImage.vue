<script setup lang="ts">
import type { AvatarImageProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { AvatarImage } from "reka-ui"
import { cn } from "@/shared/lib/utils"

const props = defineProps<
  AvatarImageProps & {
    class?: HTMLAttributes["class"]
  }
>()
</script>

<template>
  <AvatarImage
    :src="props.src"
    :as="props.as"
    :as-child="props.asChild"
    :class="cn('aspect-square size-full object-cover', props.class)"
  />
</template>

<script is:inline>
  const modal = document.getElementById('contactModal');
  const openBtn = document.getElementById('openModal');

  openBtn?.addEventListener('click', () => {
    modal?.showModal();
  });
</script>
